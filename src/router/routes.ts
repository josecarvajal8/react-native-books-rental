import Detail from "../components/detail";
import BookList from "../components/booksList";
import Login from "../components/login";
import WishList from "../components/wishList";
import SettingsScreen from "../components/settings";

export interface IRoute {
    name: string;
    component: (props: any) => JSX.Element;
    options?: any,
    icon?: string
}
export const routes_stack: IRoute[] = [
    {
        name: 'Login',
        component: Login,
        options: { title: 'Login', headerShown: false }
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: 'Detail', headerShown: false }
    }
];
export const tabsIcons: { [key: string]: string } = {
    ['Library']: 'book',
    ['WishList']: 'star-o',
    ['Settings']: 'gear'
}
export const routes_tab: IRoute[] = [
    {
        name: 'Library',
        component: BookList,
        options: { title: 'Library', headerShown: false, tabBarVisible: true }
    },
    {
        name: 'WishList',
        component: WishList,
        options: { title: 'WishList', headerShown: false, tabBarVisible: true }
    },
    {
        name: 'Settings',
        component: SettingsScreen,
        options: { title: 'Settings', headerShown: false, tabBarVisible: true }
    }
];
