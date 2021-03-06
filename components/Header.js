export default function Header({ title }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
			<img src="/logo.webp" width="30" height="30" class="d-inline-block align-top" alt="" />
			KPM Vegetables
		  </a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			  <div class="navbar-nav">
				<a class="nav-item nav-link active" href="#">Price <span class="sr-only">(current)</span></a>
			  </div>
			</div>
		  </nav>
  )
}
