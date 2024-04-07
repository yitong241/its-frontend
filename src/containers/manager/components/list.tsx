import React from 'react';
import { Typography, Table, Checkbox, Button, Modal, Input } from 'antd';

const { Title } = Typography;

interface ListProps {
    users: IStudent[];
    onCheckboxChange: (id: number, checked: boolean) => void;
    handleButtonClick: () => void;
    listTitle: string;
    buttonName: string;
    assignClick: () => void;
}

const List: React.FC<ListProps> = ({ users, onCheckboxChange, handleButtonClick, listTitle, buttonName, assignClick}) => {
    const columns = [
        {
            title: '',
            dataIndex: 'convert',
            key: 'convert',
            width: '5%', 
            render: (text: string, record: IStudent) => (
                <Checkbox onChange={(e) => onCheckboxChange(record.id, e.target.checked)} />
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <Title level={2} >
                {listTitle}
            </Title>
            <Button style={{marginBottom: '2%'}} onClick={handleButtonClick}>{buttonName}</Button>
            <Button style={{marginBottom: '2%', marginLeft: '2%'}} onClick={assignClick}> Assign to Tutor </Button>
            <Table
                columns={columns}
                dataSource={users}
                pagination={false}
                scroll={{ x: 'max-content' }}
                style={{ backgroundColor: '#ffffff' }}
            />

            <Modal
            title="Assign Students to Tutor"
            
        >
            <p>Enter the tutor ID:</p>
            <Input  />
        </Modal>
        </div>
    );

};

export default List;
