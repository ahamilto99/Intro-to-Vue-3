app.component('review-form', {
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <br/>
        <fieldset>
            <legend>Would you recommend this product?</legend>
            <input type="radio" name="recommend" id="yes" value="true" v-model.boolean="recommend" style="width: 50%;">
            <label for="yes">Yes</label>
            <input type="radio" name="recommend" id="no" value="false" v-model.boolean="recommend" style="width: 50%;">
            <label for="no">No</label>
        </fieldset>
                
        <input class="button" type="submit" value="Submit">
    </form>
    `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === '' ||
        this.review === '' ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert('Review is incomplete. Please fill out every field.');
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = null;
    }
  }
});
