<template>
<div class="container">
  <div class="row">
    <div class="col-md"></div>
    <div class="col-md">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <br>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <br>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="col-md"></div>
  </div>
</div>
</template>

<script>
export default {};

</script>

<style scoped>

.row {
  display: grid;
  grid-template-columns: 10fr 40fr 10fr;
  grid-gap: 2em;
}
</style>