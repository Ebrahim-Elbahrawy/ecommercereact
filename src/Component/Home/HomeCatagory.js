import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utility/SubTitle";

import Spinner from "react-bootstrap/Spinner";
import HomeCategoryPageHook from "./../../hook/category/home-category-page-hoock";
import CategoryCircle from "../Catagory/CategoryCircle";
import ServiceCircle from "../services/ServiceCircle";
const HomeCategory = () => {
  const [categoryData, loading, colors, servises] = HomeCategoryPageHook();

  return (
    <Container>
      {/* <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" /> */}
      <Row className="my-2 d-flex justify-content-around">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <div style={{ width: "300px" }}>
            <h2 className="sub-tile"> التصنيفات</h2>
            <div className="my-2  circle-category  ">
              <div className="circle">
                {loading === false && categoryData.data ? (
                  categoryData.data
                    .slice(0, 5)
                    .map((item, index) => (
                      <CategoryCircle
                        id={item._id}
                        key={index}
                        title={item.name}
                        img={item.image}
                        background={colors[index]}
                      />
                    ))
                ) : (
                  <h1>لايوجد تصنيفات </h1>
                )}
              </div>
            </div>
          </div>
        )}

        <div style={{ width: "300px" }}>
          <h2 className="sub-tile"> الخدمات</h2>
          <div className="my-2  circle-category  ">
            <div className="circle">
              {servises ? (
                servises.map((item, index) => (
                  <ServiceCircle
                    key={index}
                    title={item.name}
                    icon={item.icon}
                    link={item.link}
                    background={colors[index]}
                  />
                ))
              ) : (
                <h1>لايوجد تصنيفات </h1>
              )}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default HomeCategory;
