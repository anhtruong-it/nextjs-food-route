import { GSSP_NO_RETURNED_VALUE } from 'next/dist/lib/constants';
import classes from './loading.module.css';

export default function MealsLoading() {
    return <p className={classes.loading}>Featching meals...</p>
};