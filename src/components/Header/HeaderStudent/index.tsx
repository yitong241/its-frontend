'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, message } from 'antd';
import { DesktopOutlined, CheckSquareOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useLazyAuthLogoutQuery } from '@/redux/apis/auth';
import { usePathname } from 'next/navigation';
import getLocale from '@/common/utils/extractLocale';
import { authSelector } from '@/redux/slices/auth';
import LanguageSelector from '@/components/LanguageSelector';

const HeaderStudent: React.FC = () => {
  const [authLogout] = useLazyAuthLogoutQuery();
  const pathname = usePathname();
  const { tokens } = useSelector(authSelector);
  const locale = getLocale(pathname);

  const handleLogout = async () => {
    try {
      const result = await authLogout({ tokens }).unwrap();
      const locale = getLocale(pathname);
      if (result) {
        window.location.href = `/${locale}`;
      }
    } catch (error) {
      message.error('Error logging out');
    }
  };

  const defaultSelectedKey =
    String(window.location.pathname).split('/')[3] == 'questions' ? 'check-questions' : 'dashboard';

  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={[defaultSelectedKey]}>
      <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
        <Link href={`/${locale}/student/`} passHref>
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
        </Link>
      </Menu.Item>
      <Menu.Item key="check-questions" icon={<CheckSquareOutlined />}>
        <Link href={`/${locale}/student/questions/`} passHref>
          <Menu.Item key="dashboard">Check Questions</Menu.Item>
        </Link>
      </Menu.Item>
      <Menu.Item style={{ marginLeft: 'auto' }}>
        <LanguageSelector />
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        <Menu.Item key="dashboard">Log Out</Menu.Item>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderStudent;
