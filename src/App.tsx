import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import benefit1 from "./assets/benefit1.png";
import benefit2 from "./assets/benefit2.png";
import benefit3 from "./assets/benefit3.png";
import benefit4 from "./assets/benefit4.png";
import pention from "./assets/pention.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { sendDataToGA } from "./utils/events.ts";
import { useState } from "react";

export const App = () => {
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    sendDataToGA().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            Переведите пенсию на счёт в Альфа-Банк
          </Typography.TitleResponsive>
          <Gap size={12} />
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Выберите способ — идти никуда не придётся
          </Typography.Text>
          <img
            src={pention}
            alt="Карта для ребенка"
            style={{ width: "85%", borderRadius: "16px" }}
          />
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Привилегии
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={benefit1}
              alt=""
              width={80}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              5% кэшбэка в аптеках каждый месяц
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit2}
              alt=""
              width={70}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Бесплатное снятие наличных
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit3}
              alt=""
              width={80}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text tag="p" view="primary-small" weight="bold">
              Вклад до 21,5% годовых
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={benefit4}
              alt=""
              width={90}
              height={70}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Бесплатные пуши и смс
            </Typography.Text>
          </div>
        </div>

        <Gap size={24} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Как это работает
        </Typography.TitleResponsive>

        <Typography.Text tag="p" view="primary-small">
          Заполните заявление о переводе пенсии в Альфа-Банк, мы отправим его в
          СФР через Госуслуги.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-small">
          Без походов в банк или СФР. Бесплатно и безопасно.
        </Typography.Text>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile
          loading={loading}
          onClick={submit}
          block
          view="primary"
          href="https://alfabank.ru/"
        >
          Начать оформление
        </ButtonMobile>
      </div>
    </>
  );
};
