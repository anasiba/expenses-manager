import React from "react";
import Header from "./Header";
import WalletInfo from "./WalletInfo";
import List from "./List";
import AddExp from "./AddExp";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actions: []
    };

    this.expenses = this.expenses.bind(this);
  }

  submitFormP = action => {
    if (!action.desc || !action.amount) {
      return "Enter valide value to add item";
    }

    this.setState(prevState => ({
      actions: prevState.actions.concat(action)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("actions");
      const actions = JSON.parse(json);

      if (actions) {
        this.setState(() => ({ actions }));
      }
    } catch (error) {
      //Don't do any thing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.actions.length !== this.state.actions.length) {
      const json = JSON.stringify(this.state.actions);
      localStorage.setItem("actions", json);
    }

    console.log(localStorage.getItem("actions"));
  }

  expenses() {
    return this.state.actions.filter(action => action.type !== "inc");
  }
  incomes() {
    return this.state.actions.filter(action => action.type !== "exp");
  }
  expensesAmount() {
    const expenses = this.expenses();

    var expensesAmount = expenses
      .map(exp => parseFloat(exp.amount))
      .reduce((acc, cur) => acc + cur, 0);
    return expensesAmount;
  }

  incomesAmount() {
    const incomes = this.incomes();

    var incomesAmount = incomes
      .map(inc => parseFloat(inc.amount))
      .reduce((acc, cur) => acc + cur, 0);

    return incomesAmount;
  }

  balanceAmount(inc, exp) {
    return inc - exp;
  }

  render() {
    const expenses = this.expenses();
    const expensesAmount = this.expensesAmount();
    const incomesAmount = this.incomesAmount();
    const balance = this.balanceAmount(incomesAmount, expensesAmount);
    this.expensesAmount();
    return (
      <div>
        <Header />
        <WalletInfo
          expenses={expensesAmount}
          incomes={incomesAmount}
          balance={balance}
        />
        <List actions={expenses} />
        <AddExp submitFormP={this.submitFormP} />
      </div>
    );
  }
}

export default App;
