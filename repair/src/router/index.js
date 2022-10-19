import VueRouter from 'vue-router'
import Login from '../components/login'
import Operation from '../components/operation'
import Video from '../components/video' 
import Scene from '../components/scene' 
import Problem from '../components/problem'
import User from '../components/user'
import Message from '../components/message'
import MessageVideo from '../components/message video'
import Backstage from '../components/backstage'
import Menu from '../components/menu'
import Manage from '../components/manage'

const router = new VueRouter({
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login,
        },
        // {
        //     name:'message',
        //     path:'/message',
        //     component:Message,
        //     props:true,
        // },
        {
            name:'operation',
            path:'/operation',
            component:Operation,
            children:[
                {
                    name:'message1',
                    path:'message',
                    component:Message,
                },
            ]
        },
        {
            name:'video',
            path:'/video',
            component:Video,
            children:[
                {
                    name:'message2',
                    path:'message',
                    component:MessageVideo,
                },
            ]
        },
        {
            name:'scene',
            path:'/scene',
            component:Scene,
            children:[
                {
                    name:'message3',
                    path:'message',
                    component:Message,
                },
            ]
        },
        {
            name:'problem',
            path:'/problem',
            component:Problem,
            children:[
                {
                    name:'message4',
                    path:'message',
                    component:Message,
                },
            ]
        },
        {
            name:'user',
            path:'/user',
            component:User
        },
        {
            name:'backstage',
            path:'/backstage',
            component:Backstage
        },
        {
            name:'menu',
            path:'/menu',
            component:Menu
        },
        {
            name:'manage',
            path:'/manage',
            component:Manage
        },
        {
            path:'/',
            redirect:'/login'
        }
    ]
})

router.beforeEach((to,from,next)=>{
    var user = localStorage.getItem('user')
    var backstage = localStorage.getItem('backstage')
    if (to.name == 'menu' && user == 0){
        next({
            name:'user',
            replace:true
        })
    } else if(to.name == 'manage' && backstage == 0) {
        next({
            name:'backstage',
            replace:true
        })
    } else {
        next()
    }
})

export default router