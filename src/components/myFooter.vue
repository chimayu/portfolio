<template>
  <div id="nav">
    <ul class="list ma0 pa0 flex flex-row flex-wrap teal4">
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon icon="coffee" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fas', 'coffee']" flip="horizontal" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['far', 'comment']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fas', 'pen']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fas', 'cat']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon icon="child" transform="shrink-4 down-2 right-2" :mask="['fas', 'circle']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fab', 'facebook']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="['fab', 'github']" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-icon :icon="queen" size="4x" />
    </li>
    <li class="pv3 ph2 ma0 link grow font-awesome">
      <font-awesome-layers full-width class="fa-4x">
        <font-awesome-icon :icon="['fas', 'archive']"/>
        <font-awesome-layers-text class="red8" transform="down-3 shrink-14" value="SECRET" />
      </font-awesome-layers>
    </li>
  </ul>
  </div>
</template>

