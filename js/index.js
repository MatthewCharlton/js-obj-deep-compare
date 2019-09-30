const func = () => {};
const date = new Date();

const testObj = {
  blah: 'test'
};

const obj1 = {
  id: 101,
  email: 'jack@dev.com',
  func: func,
  date: date,
  arr: [1, 2, 3],
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    },
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: 'wallas',
        state: 'WX'
      },
      personalInfo: {
        name: 'Jack',
        address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX'
        },
        personalInfo: {
          name: 'Jack',
          address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
          },
          personalInfo: {
            name: 'Jack',
            address: {
              line1: 'westwish st',
              line2: 'washmasher',
              city: 'wallas',
              state: 'WX'
            },
            deep: {
              id: 101,
              email: 'jack@dev.com',
              func: func,
              personalInfo: {
                name: 'Jack',
                address: {
                  line1: 'westwish st',
                  line2: 'washmasher',
                  city: 'wallas',
                  state: 'WX'
                },
                personalInfo: {
                  name: 123,
                  address: {
                    line1: 'westwish st',
                    line2: 'washmasher',
                    city: 'wallas',
                    state: 'WX'
                  },
                  personalInfo: {
                    name: 'Jack',
                    address: {
                      line1: 'westwish st',
                      line2: 'washmasher',
                      city: 'wallas',
                      state: 'WX'
                    },
                    personalInfo: {
                      name: 'Jack',
                      address: {
                        line1: 'westwish st',
                        line2: 'washmasher',
                        city: 'wallas',
                        state: 'WX'
                      },
                      id: 101,
                      email: 'jack@dev.com',
                      func: func,
                      date: date,
                      arr: [1, 2, 3],
                      personalInfo: {
                        name: 'Jack',
                        address: {
                          line1: 'westwish st',
                          line2: 'washmasher',
                          city: 'wallas',
                          state: 'WX'
                        },
                        id: 101,
                        email: 'jack@dev.com',
                        func: func,
                        date: date,
                        arr: [1, 2, 3],
                        personalInfo: {
                          name: 'Jack',
                          address: {
                            line1: 'westwish st',
                            line2: 'washmasher',
                            city: 'wallas',
                            state: 'WX'
                          },
                          id: 101,
                          email: 'jack@dev.com',
                          func: func,
                          date: date,
                          arr: [1, 2, 3],
                          personalInfo: {
                            name: 'Jack',
                            address: {
                              line1: 'westwish st',
                              line2: 'washmasher',
                              city: 'wallas',
                              state: 'WX'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const obj2 = Object.assign({}, obj1, { date: new Date(), testObj });

import('../pkg/index.js')
  .then(module => {
    (async () => {
      console.time('wasm');
      console.log(module.is_equal(obj1, obj2, true));
      console.timeEnd('wasm');
    })();
  })
  .catch(console.error);
