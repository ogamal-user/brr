function ReadMorePost() {
  return (
    <div className="readmore-post w-full grid grid-cols-12 flex-1">
      <div
        style={{
          background: "url('/readMore/readmore1.png') center center no-repeat",
          backgroundSize: "cover",
        }}
        className="slider-piece col-span-3  border-solid"
      ></div>

      <div
        style={{
          background: "url('/readMore/readmore1.png') center center no-repeat",
          backgroundSize: "cover",
        }}
        className=" slider-piece col-span-9  relative"
      >
        <di
          v
          className="first-text flex flex-col justify-between  absolute h-full top-0 left-0 right-0 backdrop-blur-lg bg-[#3F3F4680]"
        >
          <div className="flex flex-col gap-2 m-3">
            <h2 className="title text-lg">
              انطباعنا عن Indiana Jones: مزيج مثالي بين انشارتد و ولفينشتاين!
            </h2>

            <p className="desc text-sm">فريق Machine Games يُبدع!</p>
            <p className="written-by text-xxs">يومان . بقلم أحمد يسري</p>
          </div>

          <div>
            <div className="flex  items-center gap-1">
              <svg
                className="mt-1"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0828 0.678467H1.91728C1.01907 0.678467 0.28418 1.38711 0.28418 2.25324V14.8514L6.00002 12.4893L11.7159 14.8514V2.25324C11.7159 1.38711 10.981 0.678467 10.0828 0.678467ZM10.0828 12.4893L6.00002 10.7728L1.91728 12.4893V2.25324H10.0828V12.4893Z"
                  fill="#747474"
                />
              </svg>
              <span>8</span>
            </div>
          </div>
        </di>
      </div>
    </div>
  );
}

export default ReadMorePost;
