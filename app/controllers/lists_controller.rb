class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy ]
  before_action :authorize_request, only: [:create, :add_new_grocery]

  def index
    @list = List.all

    render json: @list
  end


  def show
    render json: @list, include: :groceries
  end

  def update 
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def add_grocery
    @list = List.find(params[:list_id])
    @grocery = Grocery.new(grocery_params)
    if @grocery.save
      @list.groceries << @grocery
      render json: @list, include: :groceries
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end

  def add_new_grocery
    @list = List.find(params[:list_id])
    @food = Food.new(food_params)
    @food.user_id = @current_user.id
    if @food.save
      @grocery = Grocery.new
      @grocery.food_id = @food.id
      @grocery.status = 1
      if @grocery.save
        @list.groceries << @grocery
        render json: @list, include: :groceries
      else
        render json: @grocery.errors
      end
    else
      render json: @food.errors
    end
  end

  def move_grocery 
    @list = List.find(params[:list_id])
    @grocery = Grocery.find(params[:id])

    list.groceries << @grocery

    render json: @list, include: :groceries
  end

  def remove_grocery
    @list = List.find(params[:list_id])  
    @grocery = Grocery.find(params[:id])
    @list.groceries.delete(@grocery)

    render json: @list, include: :groceries
  end


  def create
    @list = List.new
    @list.user_id = @current_user.id

    if @list.save
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    def list_params 
      params.require(:list).permit(:user_id)
    end

    def grocery_params 
      params.require(:grocery).permit( :food_id)
    end

    def food_params
      params.require(:food).permit(:name, :category_id, :user_id)
    end
end
