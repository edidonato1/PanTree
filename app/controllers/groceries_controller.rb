class GroceriesController < ApplicationController
  before_action :set_grocery, only: [:show, :update, :destroy ]


  def index
    @grocery = Grocery.all

    render json: @grocery
  end


  def show
    @food = Food.find(@grocery.food_id)

    render json: [@grocery, @food]
  end

  def update 
    if @grocery.update(grocery_params)
      render json: @grocery
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end


  def create
    @grocery = Grocery.new(grocery_params)

    if @grocery.save
      render json: @grocery
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      @grocery = Grocery.find(params[:id])
    end

    def grocery_params 
      params.require(:grocery).permit( :status, :time_left, :food_id)
    end
end
