app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            <br/>
            "{{ review.review }}"
            <br/>
            <br/>
            <span v-if="review.recommend === 'true'">Yes, I recommend them.</span>
            <span v-else>No, I don't recommend them.</span>
            <br/>
            <br/>
        </li>
    </ul>
  </div>
  `
});
