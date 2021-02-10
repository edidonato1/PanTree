class GroceriesController < ApplicationController
  before_action :set_grocery, only: [:show, :update, :destroy ]
  # before_action :authorize_request

  def index
    @grocery = Grocery.all

    render json: @grocery
  end


  def show
    @food = Food.find(@grocery.food_id)

    render json: [@grocery, @food] 
    # grocery is a temporary "instance" of food.. 
    # rendering both gives access to information about food grocery is associated with, without having to search foods on the client side
  end

  def update 
    if @grocery.update(grocery_params)
      render json: @grocery
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @grocery.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      @grocery = Grocery.find(params[:id])
    end

end
