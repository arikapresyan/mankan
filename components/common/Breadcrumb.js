import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { getTextFromPath } from './constants';


function Breadcrumbs({ prodName }) {
  const { messages } = useIntl();
  const { pathname } = useRouter();

  const BreadCrumbItem = useMemo(() => {
    if (pathname.includes('product')) {
      return (
        <>
          <Breadcrumb.Item>
            <Link href="/catalog">
              <a>{messages['local.catalog']}</a>
            </Link>
          </Breadcrumb.Item>
          {prodName && (
          <Breadcrumb.Item>
            {prodName}
          </Breadcrumb.Item>
          )}
        </>
      );
    } if (pathname.includes('catalog')) {
      return (
        <Breadcrumb.Item>
          {messages['local.catalog']}
        </Breadcrumb.Item>
      );
    }
    return (
      <Breadcrumb.Item>
        {getTextFromPath(pathname, messages) || ''}
      </Breadcrumb.Item>
    );
  }, [pathname, prodName, messages]);

  return (
    <div className="breadcrumb">
      <Breadcrumb separator={<Icon type="right" />}>
        <Breadcrumb.Item>
          <Link href="/">
            <a>{messages['local.home-page']}</a>
          </Link>
        </Breadcrumb.Item>
        {BreadCrumbItem}
      </Breadcrumb>
    </div>
  );
}

Breadcrumbs.propTypes = {
  prodName: PropTypes.string,
};


export default Breadcrumbs;
