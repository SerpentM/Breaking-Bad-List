import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
export default function Card(props) {
  useEffect(() => {
    loadData();
  }, []);
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);
  async function loadData() {
    const responce = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    const responce2 = await fetch("https://www.breakingbadapi.com/api/quotes");
    const item = await responce.json();
    const item2 = await responce2.json();
    setItems(item);
    setQuotes(item2);
  }

  const [pageNum, setPageNum] = useState(0);
  const cardPerpage = 10;
  const pageVisited = pageNum * cardPerpage;
  const pageCount = Math.ceil(items.length / cardPerpage);
  console.log(pageNum);

  function changePage({ selected }) {
    setPageNum(selected);
  }
  console.log(pageNum);
  return (
    <div className="container2">
      <div className="cardContainer">
        {items
          .filter((data) => {
            if (props.searchValue === "") {
              return data.name;
            } else if (
              data.name.toLowerCase().includes(props.searchValue.toLowerCase())
            ) {
              return data.name;
            } else if (
              data.nickname
                .toLowerCase()
                .includes(props.searchValue.toLowerCase())
            ) {
              return data.nickname;
            } else if (
              data.portrayed
                .toLowerCase()
                .includes(props.searchValue.toLowerCase())
            ) {
              return data.portrayed;
            }
          })
          .slice(pageVisited, pageVisited + cardPerpage)
          .map((data) => {
            return (
              <div className="card" key={data.char_id}>
                <div className="imageContainer">
                  <img className="card-img-top" src={data.img} alt="Card" />
                </div>
                <div className="cardQuote">
                  <h4 className="card-title">Famous Quotes By Our Character</h4>
                  {quotes.map((quote) => {
                    if (quote.author === data.name) {
                      return <p className="card-text"> {quote.quote}</p>;
                    }
                  })}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <h5 className="card-title">
                    Date of Birth :- {data.birthday}
                  </h5>
                  <h5 className="card-title">
                    Occupation :- {data.occupation[0]}
                  </h5>
                  <h5 className="card-title">Status :- {data.status}</h5>
                  <h5 className="card-title">Nickname :- {data.nickname}</h5>
                  <h5 className="card-title">
                    Portrayed By :- {data.portrayed}
                  </h5>
                  <h5 className="card-title">
                    Season Appearance :- Season {data.appearance}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLable={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationdisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
