export const CardOne = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-80">
        <img
          src="https://s3-alpha-sig.figma.com/img/bc36/25fe/c29a6fdfc56f1281691b64cd6d326273?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pg1v6k2ZtKt1TwjQy9MTEwPNaDQuEDFm2lZTWY3BJs9CUJrL5olPHI596vZs0e07ClWShBPc3gg94Uw9EfQsI3LsJFEZLfbDnr9b7jUxyJFtaL6L5uw9lh5BUShxH6NCM6guzjAGnOFXSTzZbOCNdCNJejXcHm7GW5dMOLH-RGhx~fbhfAX-6YcmVlBk69aJutyZl4gazFPEzNg0v6WoYIqey4iSRArAutXCxhFHKInxWKBBJQsTcCqWS2ZhDf9pXj1p6AZJnJpEOPBgSUKyGhI~-K523uhwTXsrS-OyMy74EDPv9aB6Ut-sEvIj8AEyVJZI2SDn8jqOy4cZPtVTDw__"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
