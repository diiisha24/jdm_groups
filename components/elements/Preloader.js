export default function Preloader() {
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          {/* <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="K" className="letters-loading">
            K
          </span> */}
          <span data-text-preloader="J" className="letters-loading">
            J
          </span>
          <span data-text-preloader="D" className="letters-loading">
            D
          </span>
          <span data-text-preloader="M" className="letters-loading">
            M
          </span>
          <span data-text-preloader=" " className="letters-loading">
            
          </span>
          <span data-text-preloader="G" className="letters-loading">
            G
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="U" className="letters-loading">
            U
          </span>
          <span data-text-preloader="P" className="letters-loading">
            P
          </span>

        </div>
        {/* <div className="txt-loading">
          <img src="assets/img/logo/white-logo.svg" alt="logo" />
        </div> */}
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
