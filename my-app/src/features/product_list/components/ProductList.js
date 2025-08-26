import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductsAsync,
  selectAllProducts,
  fetchProductsByFiltersAsync,
} from "../productSlice";

//ProductList
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts) || [];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage) || 1;

  // Filters
  const [filter, setFilter] = useState({});
  const [categories, setCategories] = useState([]);

  // ALL CATEGORIES ARE DIRECT COMING FROM DUMMY.JSON FILE
  useEffect(() => {
    dispatch(fetchAllProductsAsync()); // fetches products from ProductSlice

     // Fetch categories directly from DummyJSON API
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json()) //Converts the response into a JavaScript array.
      .then((data) => setCategories(data)) //Updates your categories state with that array.
      .catch((err) => console.error("Failed to fetch categories", err));
  }, [dispatch]);

  const handleFilter = (e, section, option) => {
    let newFilter = { ...filter };
    if (e.target.checked) {
      // Set only the selected category (replace previous one)
      newFilter[section.id] = option.value;
    } else {
      // If unchecked, remove the filter
      delete newFilter[section.id];
    }
    setFilter(newFilter);
    dispatch(fetchProductsByFiltersAsync(newFilter));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      {/* Mobile Filter */}
      <MobileCategoryFilter
        filter={filter}
        categories={categories}
        handleFilter={handleFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Laptop Filter */}
        <LaptopCategoryFilter
          filter={filter}
          categories={categories}
          handleFilter={handleFilter}
        />

        {/* Products */}
        <div className="lg:col-span-3">
          {currentProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                // <Link to="/productdetails" key={product.id}>
                <Link to={`/productdetails/${product.id}`} key={product.id}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition transform hover:-translate-y-2">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={
                          Array.isArray(product.images)
                            ? product.images[0]
                            : product.images
                        }
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {product.brand}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-xl font-bold text-red-500">
                          ${product.price}
                        </p>
                        <span className="text-sm bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                          -{product.discountPercentage}%
                        </span>
                      </div>
                      <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-red-500 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PaginationFilter */}
      <PaginationFilter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ProductList;

//MobileCategoryFilter
function MobileCategoryFilter({ filter, categories, handleFilter }) {
  const [open, setOpen] = useState(null);
  const toggleSection = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="lg:hidden w-full mb-6 border rounded-lg shadow p-4 bg-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">Filters</h3>
        <div className="text-sm flex gap-3">
          <button className="text-blue-600">Save view</button>
          <button className="text-red-500">Clear all</button>
        </div>
      </div>
      {categories.map((cat) => (
        <div key={cat} className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={filter?.category === cat}
            onChange={(e) =>
              handleFilter(e, { id: "category" }, { value: cat, label: cat })
            }
          />
          <label>{cat}</label>
        </div>
      ))}
      <div>
        <button
          onClick={() => toggleSection("Category")}
          className="flex justify-between w-full py-2 font-medium"
        >
          Category
          <ChevronDownIcon
            className={`w-5 h-5 transition-transform ${
              open === "Category" ? "rotate-180" : ""
            }`}
          />
        </button>
        {open === "Category" && (
          <div className="pl-2 space-y-2">
            {categories.map((cat, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  onChange={(e) =>
                    handleFilter(
                      e,
                      { id: "category" },
                      { value: cat, label: cat }
                    )
                  }
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

//LaptopCategoryFilter
function LaptopCategoryFilter({ filter, categories, handleFilter }) {
  return (
    <aside className="hidden lg:block">
      {categories.length > 0 && (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Categories</span>
              <span className="ml-6 flex items-center">
                <PlusIcon className="size-5 group-data-open:hidden" />
                <MinusIcon className="size-5 group-not-data-open:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input
                    id={`filter-category-${idx}`}
                    name="category"
                    type="checkbox"
                    checked={filter?.category === cat}
                    onChange={(e) =>
                      handleFilter(
                        e,
                        { id: "category" },
                        { value: cat, label: cat }
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <label
                    htmlFor={`filter-category-${idx}`}
                    className="text-sm text-gray-600"
                  >
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )}
    </aside>
  );
}

//PaginationFilter
function PaginationFilter({ currentPage, setCurrentPage, totalPages }) {
  // Function to get visible page numbers
  const getPageNumbers = () => {
    let pages = [];

    // Always show first 3 pages if you're near the start
    if (currentPage <= 3) {
      pages = [1, 2, 3];
    }
    // Show last 3 pages if you're near the end
    else if (currentPage >= totalPages - 2) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    }
    // Otherwise, show the current page in the middle
    else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-10">
      <div className="inline-flex rounded-xl shadow-sm bg-white px-3 py-2">
        <ul className="flex items-center gap-2">
          {/* Prev Button */}
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-md border transition ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:border-indigo-500 hover:text-indigo-500"
              }`}
            >
              ‹
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((num) => (
            <li key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                className={`w-9 h-9 flex items-center justify-center rounded-md border transition ${
                  currentPage === num
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "hover:border-indigo-500 hover:text-indigo-500"
                }`}
              >
                {num}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-md border transition ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:border-indigo-500 hover:text-indigo-500"
              }`}
            >
              ›
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
