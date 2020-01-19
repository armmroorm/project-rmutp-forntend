<template>

  <!--[START Table]-->
  <table class="table-vcenter table-bordered table-responsive" width="100%">

    <!--[START Header columns]-->
    <thead>
    <tr class="bg-primary">
      <th v-for="(v, i) in config" :key="i" :width="v.width">{{v.label}}</th>
    </tr>
    </thead>
    <!--[END Header columns]-->

    <!--[START Body table]-->
    <tbody>
    <tr>

      <!--[START Data rows]-->
      <td v-for="(v, i) in config" :key="i" :class="'text-' + v.align">
        test
      </td>
      <!--[END Data rows]-->


    </tr>
    </tbody>
    <!--[END Body table]-->

  </table>
  <!--[END Table]-->

</template>

<script>

  export default {
    props: {
      config: {
        type: Array
      }
    },
    data() {
      return {
        state: '',
        stateMsg: ''
      }
    },
  }
</script>

<style lang="css" scoped>
  thead > tr > th {
    color: white;
    text-align: center;
  }

  .dropdown-menu {
    position: absolute;
    will-change: transform;
    top: 0px;
    left: 0px;
    transform: translate3d(0px, 38px, 0px) !important;
    min-width: 11.2rem;
    font-size: 0.9em;
  }

  #main-btn {
    width: 150px;
    font-size: 0.9em;
  }

  .table-responsive {
    display: table;
    /* table-layout:auto; */
  }

  table tr td:nth-child(1) {
    width: 30%;
  }

  table tr td:nth-child(5) {
    width: 10%;
  }
</style>
