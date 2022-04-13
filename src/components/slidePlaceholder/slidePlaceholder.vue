<template>
  <div class="c-slid-placeholder">
    <div class="picture-placeholder">
      <img :src="picture" alt="placeholder" class="img">
    </div>
    <p class="paragraph-placeholder">The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
    <p class="paragraph-placeholder">For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
    <p class="paragraph-placeholder">In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
    <p class="paragraph-placeholder">For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
  </div>
</template>

<script>
export default {
    name: 'slidePlaceholder',
    props: {
        picture: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.img {
  height: 102px;
  width: 293px;
}
p:not(:last-child) {
 margin-bottom: 14px;
}
</style>
