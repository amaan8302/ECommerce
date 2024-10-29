"use client";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/men_kurts";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹419",
  discountPrice: "₹999",
  discount: "58%",
  rating: "23,111",
  review: "1228",
  star: "3.8",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/d/v/e/-original-imagwz2u8h7vucqp.jpeg?q=70&crop=false",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/128/128/xif0q/shirt/f/2/y/-original-imagwz2uqagepsdz.jpeg?q=70&crop=false",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/128/128/xif0q/shirt/q/l/q/-original-imagwz2uh35tgz7a.jpeg?q=70&crop=false",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/128/128/xif0q/shirt/w/j/0/-original-imagwz2us4gzwrkf.jpeg?q=70&crop=false",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: false },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: false },
    { name: "3XL", inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("params :-- ", params);
  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("SELECTED SIZE. NAME WALA DATA : ", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };
  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
  }, [params.productId]);
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-width-2xl px-4 pb-60 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              {/* <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                Women A-line Dark Blue, Light Blue Dress
              </h1> */}
              <h1
                className="_6EBuvT"
                style={{
                  color: "#212121",
                  fontSize: "18px",
                  fontWeight: 400,
                  display: "contents",
                }}
              >
                <span
                  className="mEh187"
                  style={{
                    color: "#878787",
                    fontSize: "19px",
                    display: "block",
                    fontWeight: 500,
                    marginTop: "12px",
                  }}
                >
                  {products.product?.brand}&nbsp;
                </span>
                <span
                  className="VU-ZEz"
                  style={{
                    padding: "0",
                    lineHeight: "1.4",
                    fontSize: "1.5rem",
                    fontWeight: "inherit",
                    display: "inline-block",
                    boxSizing: "border-box",
                    margin: "0",
                  }}
                >
                  {products.product?.title}
                </span>
              </h1>
            </div>

            <div
              className="_2lX4N0 dB67CR"
              style={{ color: "#26a541", margin: "6px 0 -4px" }}
            >
              <span>Special price</span>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              {/* <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p> */}
              <div
                className="UOCQB1"
                style={{
                  boxSizing: "border-box",
                  margin: "0",
                  padding: "0",
                  display: "block",
                  unicodeBidi: "isolate",
                }}
              >
                <div
                  className="hl05eU"
                  style={{
                    boxSizing: "border-box",
                    margin: "0",
                    padding: "0",
                    display: "block",
                    unicodeBidi: "isolate",
                  }}
                >
                  <div
                    className="Nx9bqj CxhGGd"
                    style={{
                      fontSize: "28px",
                      verticalAlign: "sub",
                      display: "inline-block",
                    }}
                  >
                    ₹{products.product?.discountedPrice}
                  </div>
                  <div
                    className="yRaY8j A6+E6v"
                    style={{
                      fontSize: "16px",
                      marginLeft: "12px",
                      verticalAlign: "middle",
                      color: "#878787",
                      display: "inline-block",
                    }}
                  >
                    ₹{products.product?.price}
                  </div>
                  <div
                    className="UkUFwK WW8yVX dB67CR"
                    style={{
                      marginLeft: "12px",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#388e3c",
                      verticalAlign: "middle",
                      display: "inline-block",
                    }}
                  >
                    <span>{products.product?.discountPercent}% off</span>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                {/* <div>
                  <Rating name="read-only" value={4.5} readOnly />
                  <p>59443 Ratings</p>
                  <p>4382 Reviews</p>
                </div> */}
              </div>
              <div className="DRxq-P">
                <div
                  className="ISksQ2"
                  style={{ cursor: "pointer", display: "inline-block" }}
                >
                  <div
                    className="_5OesEi HDvrBb VWRXZO"
                    style={{ marginBottom: "6px", fontSize: "16px" }}
                  >
                    <span
                      id="productRating_LSTDREGPGYJCZ9MF7XAJBRDR1_DREGPGYJCZ9MF7XA_"
                      className="Y1HWO0"
                      style={{ position: "relative", boxSizing: "border-box" }}
                    >
                      <div
                        className="XQDdHH _1Quie7"
                        style={{
                          padding: "2px 7px",
                          borderRadius: "14px",
                          fontSize: "16px",
                          backgroundColor: "#26a541",
                          verticalAlign: "baseline",
                          lineHeight: "normal",
                          display: "inline-block",
                          color: "#fff",
                        }}
                      >
                        {product.star}&#9733;
                      </div>
                    </span>
                    <span
                      className="Wphh3N"
                      style={{
                        paddingLeft: "8px",
                        fontWeight: 500,
                        color: "#878787",
                        boxSizing: "border-box",
                      }}
                    >
                      <a href="#xyz">
                        <span>
                          {product.rating} ratings and {product.review} reviews
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    bgcolor: "#9155fd",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RATING AND REVIEWS */}
        <section>
          <h1 id="xyz" className="font-semibold text-lg pb-4">
            Review and Rating
          </h1>
          <div className="border p-5 text-sm">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2">Product Rating</h1>
                <div className="flex items-center space-x-3">
                  <Rating
                    value={4.5}
                    name="half-rating"
                    readOnly
                    precision={0.5}
                  />
                  <p className="opacity-60 text-base">23,111 Ratings</p>
                </div>
                <Box className="mt-5 space-y-3  ">
                  <Grid
                    container
                    // justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Grid item xs={2}>
                      <p>EXCELLENT</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={58}
                        sx={{
                          bgcolor: "lightgray",
                          borderRadius: 4,
                          height: 7,
                        }}
                        color="success"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    // justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Grid item xs={2}>
                      <p>VERY GOOD</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={58}
                        sx={{
                          bgcolor: "lightgray",
                          borderRadius: 4,
                          height: 7,
                        }}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    // justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Grid item xs={2}>
                      <p>GOOD</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        sx={{
                          bgcolor: "lightgray",
                          borderRadius: 4,
                          height: 7,
                          color: "yellowk",
                        }}
                        className="bg-yellow-300"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    // justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Grid item xs={2}>
                      <p>AVERAGE</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={30}
                        sx={{
                          bgcolor: "lightgray",
                          borderRadius: 4,
                          height: 7,
                        }}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    // justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Grid item xs={2}>
                      <p>POOR</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={20}
                        sx={{
                          bgcolor: "lightgray",
                          borderRadius: 4,
                          height: 7,
                        }}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* SIMILAR PRODUCTS */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font extrabold">Similar Products</h1>
          <div className="flex flex-wrap space-y-5">
            {mens_kurta.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
