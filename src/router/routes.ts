import Detail from "../components/detail";
import BookList from "../components/booksList";
import Login from "../components/login";
import WishList from "../components/wishList";
import SettingsScreen from "../components/settings";
import Comments from "../components/comments";
import I18n from 'i18n-js';
import { setI18nConfig } from "../i18n";
setI18nConfig();
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
        options: { title: I18n.t('titles.detail'), headerShown: false }
    },
    {
        name: 'Comments',
        component: Comments,
        options: { title: I18n.t('titles.comments'), headerShown: false }
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
        options: { title: I18n.t('titles.library'), headerShown: false, tabBarVisible: true }
    },
    {
        name: 'WishList',
        component: WishList,
        options: { title: I18n.t('titles.wishlist'), headerShown: false, tabBarVisible: true }
    },
    {
        name: 'Settings',
        component: SettingsScreen,
        options: { title: I18n.t('titles.settings'), headerShown: false, tabBarVisible: true }
    }
];
