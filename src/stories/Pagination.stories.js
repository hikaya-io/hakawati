import PaginationBasic from '../components/pagination/PaginationBasic.vue'

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
    `,

})
