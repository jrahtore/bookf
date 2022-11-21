import * as React from 'react';
import { BusinessIcon, WorkHistoryIcon } from '@mui/icons-material';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Card,
    CardContent
} from '@mui/material';
const Setting = () => {
    let data = [
        {
            title: 'Business Details',
            d: 'View and update your business',
            link: '',
            icon: <BusinessIcon />
        },
        {
            title: 'Availability',
            d: 'Set your cancellation policy and the frequency that services are available ',
            link: '',
            icon: <WorkHistoryIcon />
        },
        {
            title: 'Scheduling Policies',
            d: 'Set your cancellation policy and the frequency that services are available.',
            link: '',
            icon: ''
        },
        {
            title: 'Calender Syncing',
            d: 'Sync your zenbooker schedule to external calander apps.',
            link: '',
            icon: ''
        },
        {
            title: 'Payments',
            d: 'Configure credit card capture when customers book online and enable tips',
            link: '',
            icon: ''
        },
        {
            title: 'Client and team notifications',
            d: 'Edit the emails and text messages that are sent to clients and team members',
            link: '',
            icon: ''
        },
        {
            title: 'Service Areas',
            link: '',
            icon: '',
            d: 'Customize the geographic areas you service'
        },
        {
            title: 'Branding',
            d: 'Customize your branding for emails, invoices, and your rescheduling page',
            link: '',
            icon: ''
        },
        {
            title: 'Developers',
            link: 'Manage webhooks and API credentials',
            d: '',
            icon: ''
        },
        {
            title: 'Feedback & Reviews',
            link: '',
            icon: '',
            d: 'Collect feedback from customers and invite them to leave reviews'
        },
        {
            title: 'Job Assignment',
            link: '',
            icon: '',
            d: 'Configure job assignment and dispatch options for your service providers'
        },
        {
            title: 'Zenbooker Account',
            link: 'Manage your account and your subscription plan',
            d: '',
            icon: ''
        }
    ];
    return (
        <>
            <h1>Settings</h1>
            <Grid container spacing={2} display="flex" alignItems="center" justify="center">
                {data.map((row, i) => (
                    <Grid item md={4}>
                        <Card>
                            <CardContent>
                                <ListItemButton>
                                    <ListItemAvatar>{data[i]['icon']}</ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="subtitle1">{data[i]['title']}</Typography>}
                                        secondary={data[i]['d']}
                                    />
                                </ListItemButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default Setting;
