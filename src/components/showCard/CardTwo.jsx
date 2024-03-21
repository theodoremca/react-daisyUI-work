export const CardTwo = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-80">
        <img

          src="https://s3-alpha-sig.figma.com/img/f922/bb62/7048af1a1292dbac7c45b5c9014a1e82?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Elw3TOpbnejib4asJdf66KEURqVHAAAO6XLVGSL56JYadXfqWBFt0btEhXlDsp-uNoo904MaWy5t3MPR0QD21epJRi1-WmL9jp2~fqe6wpGW6yY5TGg1S3O775s3ehmvOHicJ8th-whSqwsFvhBSdc9IqkTOmJDGWQh2~wNGZBUprgsGIPewPKpUO4qP-uP4vzMQCgyYrY-6UsDmXJxeGvpwQxqMwAS2Y0UhiteJtp~QuFBpgT3aFRaoFiD6OkltbwTSF3CJ2CNcYBXJLDeQbqJbOQgW1vdIRYg9Flx2xEbINCGTaPAh-V9eN96vmtUOwDGNpEVoRWCJT23HukIgZQ__"
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
