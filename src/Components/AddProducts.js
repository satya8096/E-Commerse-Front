import React, { useState} from "react";
export default function AddProducts() {
  const PostURL =
    "https://e-commerse-project.onrender.com/shopykit/api/v1/all-products";
  const [Name, setName] = useState("");
  const [longName, setLongName] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [EMI, setEMI] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [specifi, setSpecifi] = useState("");
  const [deliverycost, setDeliveryCost] = useState("");
  const [type, setType] = useState("");
  const [deliverydate, setDeliveryDate] = useState("");
  const [questions, setQuestions] = useState("");
  const [filter, setFilter] = useState("");
  const postProductData = async (e) => {
    e.preventDefault()
    alert("Hello Admin, Satyanarayana! Do You Want To Submit Product Data ?");
    // Specifications Object
    const arryOfspecifi = specifi.split("&");
    let specifications = arryOfspecifi;
    const data = {
      name: Name,
      longName: longName,
      salePrice: salePrice,
      imgURL: imgURL,
      specifications: specifications,
      maxPrice: maxPrice,
      emi: EMI,
      description: description,
      rating: rating,
      reviews: reviews,
      deliverycost:deliverycost,
      deliverydate:deliverydate,
      type:type,
      questions:questions,
      filter: filter,
    };

    let check = await fetch(PostURL, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    setName("");
    setLongName("");
    setRating("");
    setDescription("");
    setEMI("");
    setImgURL("");
    setMaxPrice("");
    setSalePrice("");
    setSpecifi("");
    setReviews("");
    setFilter("");
    setQuestions('')
    setDeliveryDate('')
    setType('')
    if (check.status === 200) {
      alert("Product Details Submited Successfull !");
      console.log(data);
    } else if (check.status === 404) {
      alert(" Product Details Not Submited. Some Error is Occured !");
      console.log(data);
    } else {
      console.log(data);
    }
  };

  return (
    <div className="add-product-main-container">
      <div className="add-men-product">
        <h4 className="text-center">Add New Products</h4>
        <form>
          <input
            type="text"
            name="name"
            required
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Product Name"
          />
          <input
            type="text"
            name="name"
            required
            value={longName}
            onChange={(e) => setLongName(e.target.value)}
            placeholder="Enter Product longName"
          />
          <input
            type="text"
            name="name"
            required
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            placeholder="Enter Product salePrice"
          />
          <input
            type="text"
            name="name"
            required
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            placeholder="Enter Product imgURL"
          />
          <input
            type="text"
            name="name"
            required
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter Product maxPrice"
          />
          <input
            type="text"
            name="name"
            required
            value={EMI}
            onChange={(e) => setEMI(e.target.value)}
            placeholder="Enter Product EMI Price"
          />
          <input
            type="text"
            name="name"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Product Description"
          />
          <input
            type="text"
            name="name"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter Product Rating"
          />
          <input
            type="text"
            name="name"
            required
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
            placeholder="Enter Product Reviews"
          />
          <input
            type="text"
            name="name"
            required
            value={specifi}
            onChange={(e) => setSpecifi(e.target.value)}
            placeholder="Enter Product Specifications, Eg : with '&' "
          />
          <input
            type="text"
            name="name"
            required
            value={deliverycost}
            onChange={(e) => setDeliveryCost(e.target.value)}
            placeholder="Enter Product Delivery Cost"
          />
          <input
            type="text"
            name="name"
            required
            value={deliverydate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            placeholder="Enter Product Delivery Date"
          />
          <input
            type="text"
            name="name"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter Product Type , Eg : male, female, kid, kitchen"
          />
          <input
            type="text"
            name="name"
            required
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            placeholder="Enter Product Questions"
          />
          <input
            type="text"
            name="name"
            required
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Enter Product filter Tag Name"
          />
          <button
            className="btn btn-danger postProduct-btn"
            onClick={(e) => postProductData(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
