class StocksController < ApplicationController

    def index 
      # byebug
      stocks = Stock.all
      render json: stocks
    end

    def show
        stock = Stock.find_by(id: params[:id])
        render json: stock
    end

    def create 
      stock = Stock.create(stock_params)
      # byebug
      render json: stock
    end

    def destroy
      # byebug
      Stock.find_by(id: params[:id]).destroy

      render json: { Message: 'Stock Destroyed' }
    end



    private 

    def stock_params
        params.require(:stock).permit(:name, :amount, :purchase_price, :selling_price)
    end
end
