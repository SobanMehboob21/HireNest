
import CategoryData from "../CategoryData.ts";
import "../styles/Category.css";

export const Category = () => {
  const category = CategoryData.slice(0, 8);
  return (
    <>
      <section className="category">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header_category">
                <div className="heding">Browse by Category</div>
                <div className="sub_heading">
                  At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                  Blandit a massa elementum id sceleri
                </div>
              </div>
            </div>
            {category.length > 0 ? (
              <>
                {CategoryData.map((items) => (
                  <>
                    <div className="col-lg-3">
                      <div className="category_card" key={items.id}>
                        <div className="category_type">
                          <i className={items.icon}></i>
                        </div>
                        <div className="category_info">{items.info}</div>
                        <div className="category_jobs">{items.job_posts}</div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <>
                <h1>nothing to show</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
