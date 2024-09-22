import { getAllImages } from "@/lib/api";
import Container from "../_components/container";
import Header from "../_components/header";

export default function Index() {
  const allPosts = getAllImages();

  return (
    <main>
      <Container>
        <Header />

        <div className="flex flex-wrap gap-3">
          {allPosts.map((image) => {
            const imageName = image.split("/").reverse()[0];
            console.log(imageName);

            return (
              <div className="">
                <img
                  src={"../" + image}
                  alt={imageName}
                  width={397}
                  // className="h-auto max-w-full"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
