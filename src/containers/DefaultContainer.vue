<template>
  <div class="app">
    <AppHeader class="bg-header border-0" fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img
          class="navbar-brand-full"
          src="img/brand/logo.svg"
          width="89"
          height="25"
          alt="CoreUI Logo"
        />
        <img
          class="navbar-brand-minimized"
          src="img/brand/sygnet.svg"
          width="30"
          height="30"
          alt="CoreUI Logo"
        />
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="true" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <!-- <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item> -->
        <!-- <b-nav-item class="px-3">Settings</b-nav-item> -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item> -->
        <span class="text-white" v-if="this.username || null"> <i class="fa fa-user" /> {{this.username || null}}</span>
        <img  v-if="urlAvatar !== null"  :src="urlAvatar"  border-radius  height="40" class="ml-2 rounded-circle" 
        alt="admin@bootstrapmaster.com" />
        <DefaultHeaderDropdownAccnt v-if="stat === true" />
        <a class="register-button d-md-down-none" @click="logout" href="#" v-if="token">
          <i class="nav-icon icon-logout"></i> Sign Out
        </a>
         <router-link class="register-button" :to="{name : 'SignIn'}" v-else>
          <i class="nav-icon icon-login"></i> Sign In
         </router-link>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar class="bg-sidebar" fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="https://coreui.io">CoreUI</a>
        <span class="ml-1">&copy; 2018 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io">CoreUI for Vue</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from "@/_nav";
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb
} from "@coreui/vue";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import firebase from 'firebase/firebase';
import { BoardService } from "@/services/BoardService";
const boardService = new BoardService();
import {mapGetters} from 'vuex';
export default {
  name: "DefaultContainer",
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data() {
    return {
      nav: nav.items
    };
  },
  methods:{
      logout: function(){
        const self = this;
        if(this.stat === true) {
          boardService.fetchSignout({token : 'token'})
          .then(() => {
            alert('Sign-out successful.')
            self.$store.dispatch('user/logout');
            self.$router.push("/pages/signin");
          }).catch(err => {
            alert(err)
          });
        } else {
          firebase.auth().signOut().then(function(){
            alert('Sign-out successful.')
            self.$store.dispatch('user/logout');
            self.$router.push("/pages/signin");
          }).catch(function(error){
            alert("Oops. " + error.message)
          });
        }
    }
  },
  computed: {
    ...mapGetters({
        token: "user/token",
        username: "user/username",
        stat: "user/stat",
        urlAvatar: "user/urlAvatar"
      }),
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  }
};
</script>

<style lang="scss">
.bg-header {
  background: linear-gradient(40deg, #764ba2 10%, #667eea 100%)!important; //Color header
}
.bg-sidebar {
 background: linear-gradient(40deg,#764ba2 0% , #667eea 12%, #764ba2 90%)!important; //Color sidebars
}
.sidebar .nav-link { //text sidebar
  color: #fff;  
  font-size: 16px;
}
.sidebar .nav-title { //text-title sidebar
  color: #fff;
}
.sidebar .nav-link:hover { //Color dropdown
  color: #fff;
  background: linear-gradient(40deg, #667eea 0%, #764ba2 100%)!important
}

.app-footer {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)!important; //Color footer
}
.breadcrumb {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)!important;
}
.navbar-nav .nav-link {
  color: #fff;
  font-size: 16px;
}
.sidebar .sidebar-minimizer {
  background: linear-gradient(40deg, #764ba2 0%, #667eea 50%)!important; //Color minimizer
}
.nav-dropdown-items  {
  background: linear-gradient(40deg, #667eea 0%, #764ba2 100%)!important; //Color dropdown-item
}
.sidebar-minimized .sidebar .nav-item:hover > .nav-link {
  background: linear-gradient(40deg, #667eea 0%, #764ba2 100%)!important;
}
.sidebar-minimized .sidebar .nav > .nav-dropdown:hover {
  background: rgba(0, 0, 0, 0);
}
.sidebar .nav-dropdown.open {
    background: rgba(0, 0, 0, 0);
}
.sidebar .nav-link .nav-icon {
  color: #fff;
}
.app-header .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}
.register-button {  // button Sign Out
    background: rgba(0, 0, 0, 0);
    color: #fff;
    padding: 5px 25px;
}

.register-button:hover { // hover button Sign Out
    background-color: white;
    background: linear-gradient(40deg, #667eea 10%, #667eea 100%);
    color: #fff;
}
</style>
