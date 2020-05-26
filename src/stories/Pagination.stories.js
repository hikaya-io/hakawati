import HPagination from '../components/pagination/HPagination.vue'
import HPageSize from '../components/pagination/HPageSize.vue'

export default {
  title: 'Pagination'
}

export const hPagination = () => ({
  components: { HPagination },
  template: `
  <div>
    <div class="block">
      <span>
      When you have less then 51 pages
      </span>
      <h-pagination
        totalPageNumber="50"
      />
    </div>
    <div class="block">
      <span>
        When you have more than 50 pages
      </span>
      <h-pagination
      totalPageNumber="50"
      />
    </div>
  </div>
    `

})

export const hPaginationWithBackground = () => ({
  components: { HPagination },
  template: `
  <div>
    <div class="block">
      <span>
        Pagination with colored background is a basic pagination with a background attribute.
      </span>
      <h-pagination
        totalPageNumber="50"
        background="true"
      />
    </div>
    </br>
    <div class="block">
      <span>
        When you have more than 50 pages
      </span>
      <h-pagination
        totalPageNumber="51"
        background="true"
      />
    </div>
  </div>
      `
})

export const hPageSize = () => ({
  components: { HPageSize },
  template: `
  <div class="block">
    <span>
      Pagination with Page Size.
    </span>
    <h-page-size
      totalPageNumber="50"
      background="true"
      page-sizes="[10, 20, 30, 40]"
      page-size="10"
    />
  </div>
  `
})
