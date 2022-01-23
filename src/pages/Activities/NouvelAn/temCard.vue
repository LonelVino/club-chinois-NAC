<template>
    <div class="card">
      <router-link class="card-link" :to="$i18nRoute({ name: link})">
        <article class="blog-card">
          <img class="post-image" :src="image" />
          <div class="article-details">
            <h4 class="post-title">{{ name }}</h4>
            <p class="post-description">{{ desc }}</p>
            <p class="post-time"><br>{{ date }}</p>
            <div class="card-footer">
              <p class="post-time">{{ time }}</p>
              <h3 class="post-pos"><span v-html="position"></span></h3>
            </div>
          </div>
        </article>
      </router-link>
    </div>
</template>

<script>
export default {
    name: 'temCard',
    props: {
        link: String,
        image: String,
        name: String,
        desc: String,
        date: String,
        time: String,
        position: String,
    },
    computed: {
      cssProps() {
        return {
          '--mobile_bg': this.image,
        }
      }
    }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');


$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}


.card {
  margin: 2em auto;
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: $white;
  box-shadow: 0 0.1875rem 1.5rem $shadow;
  border-radius: 0.375rem;
  overflow: hidden;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover .post-title {
    @include transition(color 0.3s ease);
    color: $red;
  }
  &:hover .post-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.post-image {
  @include transition(opacity 0.3s ease);
  display: block;
  width: 100%;
	object-fit: cover;
}

.article-details {
  padding: 1.5rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.post-title {
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'RabbidHighwaySignIVRegular';
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.post-description {
  font-family: 'GidolinyaRegular';
  font-size: 0.9rem;
}

.card-footer {
  display: flex;
  flex-direction: row;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 0.5rem 0 0 0;
  border-top: 0.0625rem solid $border;
}

.post-pos {
  @include transition(color 0.3s ease);
  font-size: 0.9rem;
  color: $black;
  font-weight: 700;
  font-family: 'RabbidHighwaySignIVRegular';
  margin: 0 0 0.5rem 0;
  padding: 0.25rem 0 0 1.125rem
}

.post-time {
  padding: 0.25rem 1.125rem 0 0;
  border-right: 0.125rem solid $border;
  font-size: 0.925rem;
  font-family: 'RabbidHighwaySignIVRegular';
  font-weight: bolder;
  font-style: normal;
  color: #FF4136;
}



@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  .post-image {
    height: 100%;
  }
  
  .blog-card {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 12rem 1fr;
  }

  @media (max-width: 1400px) {
    .blog-card {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
    }
  }
  
  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 650px) {
    .article-details{
      display: none
    }
  }
}
</style>
