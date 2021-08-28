import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from './image/preloader.svg'
import  s from './HW10.module.css'

function HW10() {
  const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))

    setTimeout(()=>{
      dispatch(loadingAC(false))
    }, 2000)
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {isLoading
        ? (
          <div className={s.wrapper}><img src={preloader} alt="preloader" /></div>
        ) : (
          <div className={s.wrapper}>
            <SuperButton onClick={setLoading} className={s.button}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
