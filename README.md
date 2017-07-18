安装
Install

npm install --save react-tooltip-plugin

Use

    1: 全局引用一次样式
    1: Global require onece style

    .tooltip {
      display: inline-block;
      opacity: 0;
      z-index: 103;
      height: 24px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      line-height: 22px;
      font-size: 12px;
      background-color: #fff;
    }

    .tooltip.top::after,
    .tooltip.top::before,
    .tooltip.bottom::after,
    .tooltip.bottom::before {
      position: absolute;
      left: 50%;
      margin-left: -5px;
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }

    .tooltip.top::after {
      top: 21px;
      border-top: 5px solid #fff;
    }

    .tooltip.top::before {
      top: 22px;
      border-top: 5px solid #ccc;
    }

    .tooltip.bottom::after {
      top: -5px;
      border-bottom: 5px solid #fff;
    }

    .tooltip.bottom::before {
      top: -6px;
      border-bottom: 5px solid #ccc;
    }

    .tooltip.right::after,
    .tooltip.right::before,
    .tooltip.left::after,
    .tooltip.left::before{
      position: absolute;
      top: 50%;
      margin-top: -4px;
      content: "";
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }

    .tooltip.right::before {
      left: -6px;
      border-right: 5px solid #ccc;
    }

    .tooltip.right::after {
      left: -5px;
      border-right: 5px solid #fff;
    }

    .tooltip.left::before {
      right: -6px;
      border-left: 5px solid #ccc;
    }

    .tooltip.left::after {
      right: -5px;
      border-left: 5px solid #fff;
    }

    2: 在需要展示tooltip的模块中
    import tooltip from 'react-tooltip-plugin'

    onMouseEnter={(e)=>{tooltip({e, msg: 'Toolpic show message', align: 'top'})}}
    onMouseLeave={()=>{tooltip({leave: true})}}

    align可取值(top,right,bottom,left)默认值是top,当值为top时align可以省略。
    align available value (top,right,bottom,left) default value is top,if you set align value is top you can ellipsis it.