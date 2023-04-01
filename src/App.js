import fetchJsonp from "fetch-jsonp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import Error from "./components/Error";
import FilterByAlliances from "./components/FilterByAlliances";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { getAllAirlines } from "./features/airlines/airLineSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { displayAirlines: airlinesdata } = useSelector(
    (state) => state.airline
  );

  useEffect(() => {
    setLoading(true);
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp",
    })
      .then((res) => res.json())
      .then((airlinesdata) => {
        dispatch(getAllAirlines(airlinesdata));
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      });
  }, []);

  let content = null;

  if (loading) {
    content = <Loading />;
  }

  if (!loading && error) {
    content = <Error />;
  }

  if (!loading && !error && airlinesdata.length) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-[35px] md:mx-[68px] ">
        {/* card */}
        {airlinesdata?.map((airline, i) => (
          <Card key={i} airline={airline} i={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Header />

      {/* home page  */}
      <section className="">
        <h2 className="font-bold text-[36px] ml-[35px] md:ml-[68px] py-[35px]">
          Airlines
        </h2>

        {/* filter by alliances  */}
        <FilterByAlliances />

        {/* main container  */}
        {content}
      </section>
    </div>
  );
}

export default App;
