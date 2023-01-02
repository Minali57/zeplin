import React, { useState, useEffect, CSSProperties, useCallback } from "react";
import Search from "../Shared/Search/Search";
import Paginate from "../Shared/Pagination/Paginate";
import Filter from "./Filter/Filter";
import MissionCard from "./MissionCard/SingleCard";
import { Row } from "react-bootstrap";
import ListView from "./ListView";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { getMission } from "../../feature/zeplin/ZeplinSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { mission, isLoading } = useSelector((state) => state.mission);
  const [filterMission, setFilterMission] = useState(mission);
  const [view, setView] = useState(0);
   const filterData =useCallback(
    (filter) => {
      var data = mission;
      if (filter.city.length > 0) {
        data = data.filter((prod) => filter.city.includes(prod.city));
      }
      if (filter.country.length > 0) {
        data = data.filter((prod) => filter.country.includes(prod.country));
      }
      if (filter.theme.length > 0) {
        data = data.filter((prod) => filter.theme.includes(prod.type));
      }
      if (filter.search !== "") {
        data = data.filter(
          (prod) =>
            prod.title.toLowerCase().includes(filter.search.toLowerCase()) ||
            (prod.description &&
              prod.description
                .toLowerCase()
                .includes(filter.search.toLowerCase()))
        );
      }
      setFilterMission(data);
    },
    [filterMission]
  );
  // const filterData = (filter) => {
  //   var data = mission;
  //   if (filter.city.length > 0) {
  //     data = data.filter((prod) => filter.city.includes(prod.city));
  //   }
  //   if (filter.country.length > 0) {
  //     data = data.filter((prod) => filter.country.includes(prod.country));
  //   }
  //   if (filter.theme.length > 0) {
  //     data = data.filter((prod) => filter.theme.includes(prod.type));
  //   }
  //   if (filter.search !== "") {
  //     data = data.filter(
  //       (prod) =>
  //         prod.title.toLowerCase().includes(filter.search.toLowerCase()) ||
  //         (prod.description &&
  //           prod.description
  //             .toLowerCase()
  //             .includes(filter.search.toLowerCase()))
  //     );
  //   }
  //   setFilterMission(data);
  // };
  // const changeView = (type) => {
  //   setView(type);
  // };

  const changeView = useCallback(
    (type) => {
      setView(type);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [view]
  );
  useEffect(() => {
    dispatch(getMission());
  }, []);

  useEffect(() => {
    setFilterMission(mission);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mission]);
  return (
    <>
      <Loader loading={isLoading} />
      <div style={{ padding: "0px 120px" }}>
        <Search filterData={filterData} />
        <Filter count={filterMission.length} changeView={changeView} />
        {view === 0 && (
          <Row xs={1} md={2} lg={3}>
            {filterMission.map((item, index) => {
              return <MissionCard item={item} index={index} key={index} />;
            })}
          </Row>
        )}
        {view === 1 &&
          filterMission.map((item, index) => {
            return <ListView item={item} index={index} key={index} />;
          })}
      </div>
      <Paginate />
    </>
  );
};

export default Home;
