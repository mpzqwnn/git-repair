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

export default new VueRouter({
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
            path:'/',
            redirect:'/login'
        }
    ]
})
