import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (<main class="container flex-fill">
	<div class="row">
	  <div class="col-12">
		  <table class="table table-image">
			<thead>
			  <tr>
				<th scope="col">#</th>
				<th scope="col">Image</th>
				<th scope="col">Name</th>
				<th scope="col">Price (Rs)</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<th scope="row">1</th>
				<td class="w-25">
					<img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" class="img-fluid img-thumbnail" alt="Sheep" />
				</td>
				<td>Bootstrap 4 CDN and Starter Template</td>
				<td>2.846</td>
			  </tr>
			  <tr>
				<th scope="row">2</th>
				<td class="w-25">
					<img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" class="img-fluid img-thumbnail" alt="Sheep"/>
				</td>
				<td>Bootstrap Grid 4 Tutorial and Examples</td>
				<td>3.417</td>
			  </tr>
			</tbody>
		  </table>   
	  </div>
	</div>
</main>
  )
}
