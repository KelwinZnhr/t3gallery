import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/67808222-145e-4336-bdc5-69425fcea9ca-3lpn5f.png",
  "https://utfs.io/f/b73404fc-a166-454c-b837-baebbd08d93d-jsaulo.png",
  "https://utfs.io/f/94d9f4c8-4209-49cf-a10b-b3b4c808d801-z9wkjd.jpg",
  "https://utfs.io/f/26687f9f-16e8-495f-a55e-78a7e45defa1-rveogp.png"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages,].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
      }</div>
    </main>
  );
}
