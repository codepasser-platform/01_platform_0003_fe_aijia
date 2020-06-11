import Mock from 'mockjs';

const _sampleMockSearch = function (options: any) {
    return {
        total: 21,
        is_last: false,
        result: [
            {id: 1, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', is_admin: false},
            {
                id: 2, age: 21, first_name: 'Larsen', last_name: 'Shaw', is_admin: false
                // ,_cellVariants: {id: 'primary', first_name: 'success', last_name: 'info', age:
                // 'danger'}
            },
            {id: 3, age: 89, first_name: 'Geneva', last_name: 'Wilson', is_admin: false},
            {id: 4, age: 38, first_name: 'Jami', last_name: 'Carney', is_admin: true},
            {id: 5, age: 89, first_name: 'Geneva', last_name: 'Wilson', is_admin: false},
            {id: 6, age: 38, first_name: 'Jami', last_name: 'Carney', is_admin: true},
            {id: 7, age: 89, first_name: 'Geneva', last_name: 'Wilson', is_admin: false},
            {id: 8, age: 38, first_name: 'Jami', last_name: 'Carney', is_admin: true},
            {id: 9, age: 89, first_name: 'Geneva', last_name: 'Wilson', is_admin: false},
            {
                id: 10,
                age: 38,
                first_name: 'Jami',
                last_name: 'Display: -webkit-box; a property that must be combined to display the object as an elastic telescopic box model.Text-overflow: ellipsis; can be used for multi line text, with ellipsis "...". Hide text beyond range',
                is_admin: true
            }
        ]
    }
};

/**
 *  Mock.mock( url, post/get/delete/put , 返回的数据)
 */
Mock.mock(process.env.VUE_APP_API_BASE + process.env.VUE_APP_API_CONTEXT + 'mock/sample/search?page=1&size=10',
    'post', _sampleMockSearch);