import PaginationBasic from '../components/pagination/PaginationBasic.vue'
import PaginationPageSize from '../components/pagination/PaginationPageSize.vue'

export default {
  title: 'Pagination'
}

export const paginationBasic = () => ({
  components: {
    PaginationBasic
  },
  template: `
  <div>
    <div class="block">
      <span class="demonstration">When you have less then 71 pages</span>
      <pagination-basic totalPageNumber="70">
      </pagination-basic>
    </div>
    <div class="block">
      <span class="demonstration">When you have more than 70 pages</span>
      <pagination-basic totalPageNumber="71">
      </pagination-basic>
    </div>
  </div>
    `

})

export const paginationBackgroundColor = () => ({
  components: {
    PaginationBasic
  },
  template: `
  <div>
    <div class="block">
      <span class="demonstration">Pagination with colored background is a basic pagination with a background attribute. </span>
      <pagination-basic totalPageNumber="70" background="true">
      </pagination-basic>
    </div>
    </br>
    <div class="block">
      <span class="demonstration">When you have more than 70 pages</span>
      <pagination-basic totalPageNumber="71" background="true">
      </pagination-basic>
    </div>
  </div>
      `
})

export const paginationPageSize = () => ({
  components: {
    PaginationPageSize
  },
  template: `
  <div class="block">
    <span class="demonstration">Pagination with Page Size. </span>
    <pagination-page-size totalPageNumber="50" background="true" page-sizes="[10, 20, 30, 40]" page-size="10"/>
  </div>
  `
})
