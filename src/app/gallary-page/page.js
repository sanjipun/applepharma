import Breadcrumbs from "@/components/Breadcrumbs";
import HeaderTwo from "@/components/Header/HeaderTwo";
import GalleryCard from "@/components/image-gallary/gallary-card";
import { getGalleryData } from "@/services/api/general-api";

export default async function Page() {
  const gallery = await getGalleryData();
  return (
    <>
      <HeaderTwo />
      <Breadcrumbs title="Gallery " menuText="Gallery" />
      <section className="blog grid section">
        <div className="container">
          <div className="row">
            <div className=" col-12">
              <div className="row">
                {gallery?.results &&
                  gallery?.results.map((item) => (
                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                      <GalleryCard
                        id={item.id}
                        image={item.thumbnail}
                        title={item.title}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
