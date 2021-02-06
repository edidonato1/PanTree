class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update ]


  def index
    @food = Food.all

    render json: @food
  end


  def show
    render json: @food
  end

  def update 
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end


  def create
    @food = Food.new(food_params)

    if @food.save
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    def food_params 
      params.require(:food).permit(:name, :shelf_life, :storage_type, :category_id )
    end


end
