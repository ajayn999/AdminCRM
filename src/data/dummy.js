import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Dashboard',
                icon: <HomeOutlinedIcon  />,
                path: "/"
            },
        ],
    },

    {
        title: 'Data',
        links: [
            {
                name: 'Manage Team',
                icon: <PeopleOutlinedIcon />,
                path: "/team"
            },
            {
                name: 'Contacts Information',
                icon: <ContactsOutlinedIcon />,
                path: "/contacts"
            },
            {
                name: 'Invoices Balances',
                icon: <ReceiptOutlinedIcon />,
                path: "/invoices"
            },
        ],
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'Profile Form',
                icon: <PersonOutlinedIcon />,
                path: "/form"
            },
            {
                name: 'Calendar',
                icon: <CalendarTodayOutlinedIcon />,
                path: "/calendar"
            },
            {
                name: 'FAQ Pages',
                icon: <HelpOutlineOutlinedIcon />,
                path: "/faq"
            },

        ],
    },
    {
        title: 'Charts',
        links: [
            {
                name: 'Bar Chart',
                icon: <BarChartOutlinedIcon />,
                path: "bar"
            },
            {
                name: 'Pie Chart',
                icon: <PieChartOutlineOutlinedIcon />,
                path: "/pie"
            },

            {
                name: 'Line Chart',
                icon: <TimelineOutlinedIcon />,
                path: "/line"
            },
            {
                name: 'Geography Chart',
                icon: <MapOutlinedIcon />,
                path: "/geography"
            },

        ],
    },
];