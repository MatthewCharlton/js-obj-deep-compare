const func = () => {};
const date = new Date();

import('../pkg/index.js')
  .then(module => {
    (async () => {
      const start = performance.now();
      console.log('wasm');
      console.log(
        module.is_equal(
          {
            id: 101,
            email: 'jack@dev.com',
            func: func,
            date: date,
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
          },
          {
            id: 101,
            email: 'jack@dev.com',
            func: func,
            date: date,
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
          },
          true
        )
      );
      const finish = performance.now();
      console.log(finish - start);
    })();
  })
  .catch(console.error);
