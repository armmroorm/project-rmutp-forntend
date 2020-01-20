<template>
  <div class="animated fadeIn">
    <button class="fill buttonRead">Read More</button>
  </div>
</template>

<style lang='scss'>

// Animate the size, inside
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}

//=== Set button colors
// If you wonder why use Sass vars or CSS custom properties...
  // Make a map with the class names and matching colors
$colors: (
  fill: #a972cb,
);

// Sass variables compile to a static string; CSS variables are dynamic and inherited
  // Loop through the map and set CSS custom properties using Sass variables
@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

// Now every button will have different colors as set above. We get to use the same structure, only changing the custom properties.
.buttonRead {  
  color: var(--color);
  transition: 0.25s;
  
  &:hover,
  &:focus { 
    border-color: var(--hover);
    color: #fff;
  }
}

.buttonRead {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  margin-bottom: 20px;
  padding: 1em 2em;
}
</style>


