class StocksController < ApplicationController

    def index
      stocks = Stock.all
      render json: stocks
    end

    def show
        stock = Stock.find_by(id: params[:id])
        render json: stock
    end

    def create 
      stock = Stock.new(stock_params)
      render json: stock
    end



    private 

    def stock_params
        params.require(:stock).permit(:name, :amount, :purchase_price, :selling_price)
    end
end
