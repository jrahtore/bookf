// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [
        {
            id: 'Dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'schedules',
            title: 'Schedules',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'recurring',
            title: 'Recurring',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'payments',
            title: 'Payments',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'quote-requests',
            title: 'Quote Requests',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'customers',
            title: 'Customers',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'team',
            title: 'Team',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'coupons',
            title: 'Coupons',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'territories',
            title: 'Territories',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'online-booking',
            title: 'Online Booking',
            type: 'item',
            url: '',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        },
        {
            id: 'settings',
            title: 'Setting',
            type: 'item',
            url: '/setting',
            icon: icons.QuestionOutlined,
            external: false,
            target: false
        }
    ]
};

export default menuItems;
